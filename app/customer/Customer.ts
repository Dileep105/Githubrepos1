export class Customer{
    custId:number=0;
    custName:string="";
    billAmt:number=0;
    city:string="";
    country:string="";
    constructor(custId:number,custName:string,billAmt:number,city:string,country:string){
        this.custId=custId;
        this.custName=custName;
        this.billAmt=billAmt;
        this.city=city;
        this.country=country;
    }
}