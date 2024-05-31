import {sum} from '../Sum'

test("testing the addition",()=>{
     const result = sum(2,3)
     //Assertion
     expect(result).toBe(5)
})