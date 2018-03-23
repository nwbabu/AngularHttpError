import{demo} from './Demo';
describe('Demo Testing ',()=>{
let objdemo:demo;
/*beforeEach(()=>{
    this.objdemo= new demo();
});*/
beforeAll(()=>
{
    this.objdemo= new demo();
});
afterAll(()=>{
    this.objdemo=null;
})

it('Check Area is Greater then Zero',()=>
{
    
    const area=this.objdemo.GetArea(100,20);
    expect(area).toBeGreaterThan(0);
}

);
it('Check Area is less then 500',()=>
{
    
    const area=this.objdemo.GetArea(100,5);
    expect(area).toBeLessThanOrEqual(500);
});

});