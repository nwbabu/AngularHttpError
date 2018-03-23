export class Counter
{
   public  counterval:number=0;
   public counties:Array<string>=['India','USA','UK'];
   public IncrementCounter():number
   {
     this.counterval++;
     return this.counterval;
   }  
   public DecrementCounter():number
   {
     return this.counterval--;
   }  
}