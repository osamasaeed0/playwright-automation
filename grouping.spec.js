const{test,expect} = require('@playwright/test')

test.beforeAll(async()=>{
    console.log('This is before all')
})
test.afterAll(async()=>{
    console.log('This is after all')
})
test.beforeEach(async()=>{
    console.log('This is before each')
})
test.afterEach(async()=>{
    console.log('This is after Each')
})

test.describe.only('Group 1',()=>{
    test('Test 1', async()=>{
        console.log('This is test 1')
    })
    
    test('Test 2', async()=>{
        console.log('This is test 2')
    }
    )

})

test.describe.skip('Group 1',()=>{

test('Test 3', async()=>{
    console.log('This is test 3')
})

test('Test 4', async()=>{
    console.log('This is test 4')
})
})