import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControlName } from '@angular/forms';
import { emailValidator, matchingPasswords, textValidator, numberValidator,multiselectValidator } from '../../shared/validator';
import { HttpService } from '../../shared/services/http-service';
import{Observable} from 'rxjs';
import { Router } from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'app-order',
  providers:[HttpService],
  templateUrl: 'order.component.html',
  styleUrls: ['create_order.css']
})
export class OrderComponent implements OnInit {
  userForm: any;
  formcost: any;
  category: any;
  number: any;
  process: any;
  categorynames: any;
  processnames: any;
  Data: any;
  createBtnHide:boolean=false;
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
  orders:Observable<any>;
  processArray:any;
  order_Process_costData:any;
  constructor(public fb: FormBuilder,public httpService:HttpService,public router:Router) {
// httpService.getOrderData().subscribe(res=>this.Data=res);
    this.Data = {
      "categorynames": [{
        catagoryname: "Trousher",
        available_processnames: [{ label: "Drycleaning", processname: "Drycleaning", cost: 10, value: "Drycleaning" },
        { label: "Ironing", processname: "Ironing", cost: 11, value: "Ironing" },
        { label: "Washing", processname: "Washing", cost: 15, value: "Washing" },
        ]

      },
      {
        catagoryname: "Shirt",
        available_processnames: [{ label: "Drycleaning", processname: "Drycleaning", cost: 10, value: "Drycleaning" },
        { label: "Ironing", processname: "Ironing", cost: 11, value: "Ironing" },
        { label: "Washing", processname: "Washing", cost: 15, value: "Washing" },
        ]

      },
      {
        catagoryname: "Jeans",
        available_processnames: [{ label: "Drycleaning", processname: "Drycleaning", cost: 10, value: "Drycleaning" },
        { label: "Ironing", processname: "Ironing", cost: 11, value: "Ironing" },
        { label: "Washing", processname: "Washing", cost: 15, value: "Washing" },
        ]

      },
      {
        catagoryname: "saree",
        available_processnames: [{ label: "Drycleaning", processname: "Drycleaning", cost: 10, value: "Drycleaning" },
        { label: "Ironing", processname: "Ironing", cost: 11, value: "Ironing" },
        { label: "Washing", processname: "Washing", cost: 15, value: "Washing" },
        ]

      },
       {
        catagoryname: "skirt",
        available_processnames: [{ label: "Drycleaning", processname: "Drycleaning", cost: 10, value: "Drycleaning" },
        { label: "Ironing", processname: "Ironing", cost: 11, value: "Ironing" },
        { label: "Washing", processname: "Washing", cost: 15, value: "Washing" },
        ]
      }],
    }

    this.keywords = [
      { label: 'powerbank', value: 'powerbank' },
      { label: 'charging', value: 'charging' },
      { label: 'mobile', value: 'mobile' },
      { label: '10000mah', value: '10000mah' },
      { label: 'electronics', value: 'electronics' }, 
      { label: 'battery', value: 'battery' },
      { label: 'samsung', value: 'samsung' }];
    this.userForm = fb.group({
      category: ['', Validators.compose([Validators.required])],
      number: ['', Validators.compose([Validators.required])],
      process: ['', Validators.required]

    });
    this.keywords = this.Data.categorynames[0].available_processnames;

  }

  ngOnInit() {
  }
  catagoryselect_index: any;
  catagorychange(catogoery: any) {
    for (let i = 0; i < this.Data.categorynames.length; i++) {
      if (this.Data.categorynames[i].catagoryname === catogoery) {
        this.keywords = this.Data.categorynames[i].available_processnames;
        this.formvaluesempty();
        return;
      }
    }
    this.keywords = this.Data.categorynames;

    this.formvaluesempty();
  }
  formvaluesempty() {
    this.selectprocess = "";
    this.quntitynumber = 0;
    this.formcost = 0;
  }
  processchange(process: any) {
    this.processArray=process;
    this.formcost = 0;
    for (let i = 0; i < this.processArray.length; i++) {
      for (let j = 0; j < this.keywords.length; j++) {
        if (this.keywords[j].processname === this.processArray[i]) {
          this.processcost = this.keywords[i].cost; 
          if (this.userForm.value.number) {
            this.formcost += this.userForm.value.number * parseInt(this.processcost );
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
    this.orderdata.push(formdata);
    this.totalcost = 0;
    for (let i = 0; i < this.orderdata.length; i++) {
      this.totalcost += parseInt(this.orderdata[i].cost);
    }
    this.orders=this.orderdata;
    this.orderformReset();
  }
  UpdateToOrderInsertItems() {
    this.orderdata[this.update_row_index].category = this.userForm.value.category;
    this.orderdata[this.update_row_index].number = this.userForm.value.number;
    this.orderdata[this.update_row_index].process = this.userForm.value.process;
    this.orderdata[this.update_row_index].cost = this.formcost;
    this.orderformReset();
    this.addBtnHide = false;
      this.updateBtnHide = true;
      this.orders=this.orderdata;
       this.totalcost = 0;
    for (let i = 0; i < this.orderdata.length; i++) {
      this.totalcost += parseInt(this.orderdata[i].cost);
    }

  }
  UpdateValues(i: any) {
    this.update_row_index = i
    this.addBtnHide = true;
    this.updateBtnHide = false;
    this.orderformReset();
    this.userForm.controls["category"].setValue(this.orderdata[i].category);
    this.userForm.controls["process"].setValue(this.orderdata[i].process);
    this.userForm.controls["number"].setValue(this.orderdata[i].number);
    this.formcost = this.orderdata[i].cost;
  }
  deleteorderInsertItems(i: number) {
    this.orderdata.splice(i, 1);
    this.totalcost = 0;
    for (let i = 0; i < this.orderdata.length; i++) {
      this.totalcost += parseInt(this.orderdata[i].cost);
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
            this.formcost += this.userForm.value.number * parseInt(this.processcost );
          }
        }
      }
    }
    }

  }

  createorder(){
     if(this.orderdata.length){
     this.router.navigate(['/admin/orderlist']);
     }
  }
}