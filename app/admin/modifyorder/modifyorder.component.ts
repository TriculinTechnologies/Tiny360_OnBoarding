import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControlName } from '@angular/forms';
import { emailValidator, matchingPasswords, textValidator, numberValidator,multiselectValidator } from '../../shared/validator';
import { HttpService } from '../../shared/services/http-service';
import { Observable } from 'rxjs';
@Component({
  moduleId: module.id,
  selector: 'app-modifyorder',
  templateUrl: './modifyorder.component.html',
  styleUrls: ['./modifyorder.component.css']
})
export class ModifyorderComponent implements OnInit {
  userForm: any;
  formcost: any;
  category: any;
  number: any;
  process: any;
  categorynames: any;
  processnames: any;
  Data: any;
  addBtnHide: boolean = false;
  updateBtnHide: boolean = true;
  orderdata: any = [];
  processcost: any;
  selectcategory: any;
  quntitynumber: any;
  selectprocess: any;
  totalcost: number = 0;
  update_row_index: number;
  keywords: any;
 
  processArray: any;
  	orders:any=[
				{
					category:"Trousher",
          cost:21,
          number:1,
          process:["Drycleaning","Ironing"]
				},
        	{
					category:"Shirt",
          cost:21,
          number:1,
          process:["Drycleaning","Ironing"]
				},
        	{
					category:"Trousher",
          cost:21,
          number:1,
          process:["Drycleaning","Ironing"]
				},
        	{
					category:"Jeans",
          cost:21,
          number:1,
          process:["Drycleaning","Ironing"]
				},
        	{
					category:"Trousher",
          cost:14,
          number:1,
          process:["Ironing"]
				},
        	{
					category:"Jeans",
          cost:21,
          number:1,
          process:["Drycleaning","Washing"]
				},	{
					category:"Trousher",
          cost:15,
          number:1,
          process:["Ironing"]
				},
        	{
					category:"Shirt",
          cost:21,
          number:1,
          process:["Drycleaning","Washing"]
				},
        	{
					category:"Jeans",
          cost:10,
          number:1,
          process:["Ironing"]
				},
        	{
					category:"Shirt",
          cost:10,
          number:1,
          process:["Drycleaning"]
				}
        	
		];
		orderList:any=[

		]
  constructor(public fb: FormBuilder) {
    this.Data = {
      "categorynames": [{
        catagoryname: "Trousher",
        avilabel_processnames: [{ label: "Drycleaning", processname: "Drycleaning", cost: 10, value: "Drycleaning" },
        { label: "Ironing", processname: "Ironing", cost: 11, value: "Ironing" },
        { label: "Washing", processname: "Washing", cost: 15, value: "Washing" },
        ]
      },
      {
        catagoryname: "Shirt",
        avilabel_processnames: [{ label: "Drycleaning", processname: "Drycleaning", cost: 10, value: "Drycleaning" },
        { label: "Ironing", processname: "Ironing", cost: 11, value: "Ironing" },
        { label: "Washing", processname: "Washing", cost: 15, value: "Washing" },
        ]
      },
      {
        catagoryname: "Jeans",
        avilabel_processnames: [{ label: "Drycleaning", processname: "Drycleaning", cost: 10, value: "Drycleaning" },
        { label: "Ironing", processname: "Ironing", cost: 11, value: "Ironing" },
        { label: "Washing", processname: "Washing", cost: 15, value: "Washing" },
        ]
      }, {
        catagoryname: "skirt",
        avilabel_processnames: [{ label: "Drycleaning", processname: "Drycleaning", cost: 10, value: "Drycleaning" },
        { label: "Ironing", processname: "Ironing", cost: 11, value: "Ironing" },
        { label: "Washing", processname: "Washing", cost: 15, value: "Washing" },
        ]
      }],
    }
    
    this.userForm = fb.group({

      category: ['', Validators.compose([Validators.required])],
      number: ['', Validators.compose([Validators.required])],
      process: ['', Validators.required]

    });
    this.keywords = this.Data.categorynames[0].avilabel_processnames;
  }
  ngOnInit() {
     this.totalcost = 0;
    for (let i = 0; i < this.orders.length; i++) {
      this.totalcost += parseInt(this.orders[i].cost);
    }
  }

  catagoryselect_index: any;
  catagorychange(catogoery: any) {
    for (let i = 0; i < this.Data.categorynames.length; i++) {
      if (this.Data.categorynames[i].catagoryname === catogoery) {
        // this.processnames = this.Data.categorynames[i].avilabel_processnames;
        this.keywords = this.Data.categorynames[i].avilabel_processnames;
        this.formvaluesempty();
        return;
      }
    }
    // this.processnames = this.Data.categorynames;
    this.keywords = this.Data.categorynames;

    // alert(catogoery_index);
    this.formvaluesempty();
  }
  formvaluesempty() {
    this.selectprocess = "";
    this.quntitynumber = 0;
    this.formcost = 0;
  }
  processchange(process: any) {
    this.processArray = process;
    this.formcost = 0;
    for (let i = 0; i < this.processArray.length; i++) {
      for (let j = 0; j < this.keywords.length; j++) {
        if (this.keywords[j].processname === this.processArray[i]) {
          this.processcost = this.keywords[i].cost;
          if (this.userForm.value.number) {
            this.formcost += this.userForm.value.number * parseInt(this.processcost);
          }
        }
      }
    }
  }
  orderformReset() {
    this.userForm.reset();
    this.formvaluesempty();
  }
  orderformCancel() {
    this.userForm.reset();
    this.addBtnHide = false;
    this.updateBtnHide = true;
    this.formvaluesempty();
  }
  orderItemsAdd() {
    let formdata = {
      category: this.userForm.value.category,
      number: this.userForm.value.number,
      process: this.userForm.value.process,
      cost: this.formcost
    }
    this.orders.push(formdata);
    this.totalcost = 0;
    for (let i = 0; i < this.orders.length; i++) {
      this.totalcost += parseInt(this.orders[i].cost);
    }
    this.orders = this.orders;
    this.orderformReset();
  }
  UpdateToOrderInsertItems() {
    this.orders[this.update_row_index].category = this.userForm.value.category;
    this.orders[this.update_row_index].number = this.userForm.value.number;
    this.orders[this.update_row_index].process = this.userForm.value.process;
    this.orders[this.update_row_index].cost = this.formcost;
    this.orderformReset();
    this.addBtnHide = false;
    this.updateBtnHide = true;
    this.orders = this.orders;
    this.totalcost = 0;
    for (let i = 0; i < this.orders.length; i++) {
      this.totalcost += parseInt(this.orders[i].cost);
    }
  }
  UpdateValues(i: any) {
    this.update_row_index = i
    this.addBtnHide = true;
    this.updateBtnHide = false;
    this.orderformReset();
    this.userForm.controls["category"].setValue(this.orders[i].category);
    this.userForm.controls["process"].setValue(this.orders[i].process);
    this.userForm.controls["number"].setValue(this.orders[i].number);
    this.formcost = this.orders[i].cost;
  }
  deleteorderInsertItems(i: number) {
    this.orders.splice(i, 1);
    this.totalcost = 0;
    for (let i = 0; i < this.orders.length; i++) {
      this.totalcost += parseInt(this.orders[i].cost);
    }
  }
  QuantiyChange(quantitynumber: number) {
    if (this.userForm.value.process) {
      this.formcost = 0;
      for (let i = 0; i < this.processArray.length; i++) {
        for (let j = 0; j < this.keywords.length; j++) {
          if (this.keywords[j].processname === this.processArray[i]) {
            this.processcost = this.keywords[i].cost;
            if (this.userForm.value.number) {
              this.formcost += this.userForm.value.number * parseInt(this.processcost);
            }
          }
        }
      }
    }
  }
}