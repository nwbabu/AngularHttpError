import{Counter} from './counter';
 describe("Counter Validation",()=>
{
 let objcounter:Counter;
 beforeEach(()=>{
     this.objcounter=new Counter();
 });
 const countval:number=0;
  it('Positve value',()=>{

     this.countval= this.objcounter.IncrementCounter();
    expect(this.countval).toBeGreaterThan(0);
  });
  it('less then 100',()=>{
    this.countval=this.objcounter.IncrementCounter();
    expect(this.countval).toBeLessThan(100);
  });
  it('Check India Exits',()=>{
      expect(this.objcounter.counties).toContain('India');
  });
});