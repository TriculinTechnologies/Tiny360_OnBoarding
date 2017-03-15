import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpService, FiltersService, ResourceService } from '../../shared/services/index';
import {PaginationComponent} from '../../shared/pagination/index';
import { Router } from '@angular/router';
@Component({
  moduleId:module.id,
  selector: 'app-orderlist',
  providers:[PaginationComponent, HttpService, FiltersService, ResourceService],
  templateUrl: 'orderlist.component.html',
  styleUrls: ['orderlist.component.css']
})
export class OrderlistComponent implements OnInit {

   @ViewChild(PaginationComponent)
  paginationTable: PaginationComponent;
  // @ViewChild(DialogComponent)
  // private DialogComp: DialogComponent;

  public data: Array<any>;
  public keys: Array<any>;
  public numberOfItems: number;
  public itemsObservables: any;
  search: any = '';
  showNumberOfItems: number = 10;
  sortedCols: Array<number>;
  showNumberOfItemsList:Array<any>;
  shopData:any;
  shopformData:any;
  userForm:any;
  shop:any= {
			"showRowsList":[5,10,15,20,50,100],
			"sortedCols": [
				0,
				1,
				2,3,5
			
			],
			"shopList": [
				{
					"id": "1001",
					"OrderDate": "02/24/2017",
				},
        {
					"id": "1002",
					"OrderDate": "02/24/2017",
				},
        {
					"id": "1003",
					"OrderDate": "02/25/2017",
				},
        {
					"id": "1004",
					"OrderDate": "02/26/2017",
				},
        {
					"id": "1005",
					"OrderDate": "02/27/2017",
				},
        {
					"id": "1006",
					"OrderDate": "02/28/2017",
				},
        {
				"id": "1007",
					"OrderDate": "02/28/2017",
				},
         {
				"id": "1008",
					"OrderDate": "01/03/2017",
				},
        {
					"id": "1009",
					"OrderDate": "02/03/2017",
				},
        {
				"id": "1010",
					"OrderDate": "03/01/2017",
				},
         {
					"id": "1011",
					"OrderDate": "03/02/2017",	
				},
        {
					"id": "1012",
					"OrderDate": "03/06/2017",	
				},
        
       
        
				
			]
		}
		orders:any=[
				{
					"id": "1",
					"ProductSelection": "Shirt",
					"Quantity": "2",
					"Process": "Drycleaning,Ironing",
					"Cost": "25",	
				},
        {
					"id": "2",
					"ProductSelection": "Jeans",
					"Quantity": "2",
					"Process": "Drycleaning",
					"Cost": "10",	
				},
        {
					"id": "3",
					"ProductSelection": "Trousher",
					"Quantity": "2",
					"Process": "Drycleaning,Ironing",
					"Cost": "55",	
				},
        {
					"id": "4",
					"ProductSelection": "Shirt",
					"Quantity": "1",
					"Process": "Ironing",
					"Cost": "15",	
				},
        {
					"id": "5",
					"ProductSelection": "Shirt",
					"Quantity": "2",
					"Process": "Drycleaning",
					"Cost": "20",	
				},
        {
					"id": "6",
					"ProductSelection": "Skirt",
					"Quantity": "2",
					"Process": "Ironing",
					"Cost": "25",	
		}];
		orderList:any=[

		]
  constructor(public filtersService: FiltersService, public resource: ResourceService, public httpService: HttpService,public router:Router) {
  }
  ngOnInit() {
    // this.httpService.getMasterConfig().subscribe((res:any) => {
    //   this.shopData = res.shop;
    //   this.shopData = res.shop;
    //      this.shopformData=res.shopForm;
    // //this.userForm = this.shopformData;
    
    // });
    this.shopData=this.shop;
    this.numberOfItems = 0;
    // this.itemsObservables = this.httpService.getData();
    // this.itemsObservables.subscribe((res: any) => {
    //   this.data = res.shop.shopList;
    //   this.showNumberOfItemsList= res.shop.showRowsList;
    //   this.sortedCols = res.shop.sortedCols;
    //   this.numberOfItems = res.shop.shopList.length;
    //   this.keys = Object.keys(this.data[0]);
    // });
    this.data = this.shopData.shopList;
      this.showNumberOfItemsList= this.shopData.showRowsList;
      this.sortedCols = this.shopData.sortedCols;
      this.numberOfItems = this.shopData.shopList.length;
      this.keys = Object.keys(this.data[0]);
  }
  public orderBy(key: string, i: number) {
    if (this.sortedCols.indexOf(i) > -1)
      this.data = this.resource.sortBy(key);
  };
  changeRange(value: any) {
    this.paginationTable.changeRange(value);
  }
  imageShow(d: any) {
    if (typeof d === 'string') {
      return (d.indexOf('.jpg') > -1);
    }else {
      return false;
    }
  }
  stringShow(d: any, key: any) {
    if (typeof d === 'string') {
      var str = d.toString();
      var i = ((str.indexOf('.jpg') < 0) && key !== 'actions');
      return i;
    }else {
      return true;
    }
  }
orderView(i:any){
alert(JSON.stringify( this.data[i]));
}
orderEdit(){
     this.router.navigate(['/admin/modifyorder']);
}
// modalShopOpen() {
//     this.DialogComp.modalPopupOpen();
//   }
display: boolean = false;
popupdata:any;
    showDialog(i:any,row:any) {
			this.popupdata=JSON.stringify( this.data[i])
        this.display = true;

    }


}