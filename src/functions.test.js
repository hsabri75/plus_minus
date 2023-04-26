const functions = require('./functions');
//import {funcions} from './functions.js';

test('empty string should be valid', ()=>{    
    expect(functions.isValid('')).toBe(true)
})
test('1234 should be valid', ()=>{    
    expect(functions.isValid('1234')).toBe(true)
})
test('9 should be valid', ()=>{    
    expect(functions.isValid('1')).toBe(true)
})
test('1234567890 should be valid', ()=>{    
    expect(functions.isValid('1234567890')).toBe(true)
})
test('0123456789 should be valid', ()=>{    
    expect(functions.isValid('0123456789')).toBe(true)
})


test('_ should be invalid', ()=>{    
    expect(functions.isValid(' ')).toBe(false)
})
test('_123 should be invalid', ()=>{    
    expect(functions.isValid(' 123')).toBe(false)
})
test('456_ should be invalid', ()=>{    
    expect(functions.isValid('456 ')).toBe(false)
})
test('7_8 should be invalid', ()=>{    
    expect(functions.isValid('7 8')).toBe(false)
})

test('9q0 should be invalid', ()=>{    
    expect(functions.isValid('9q0')).toBe(false)
})
test('. should be invalid', ()=>{    
    expect(functions.isValid('.')).toBe(false)
})
test('9. should be invalid', ()=>{    
    expect(functions.isValid('9.')).toBe(false)
})
test('a should be invalid', ()=>{    
    expect(functions.isValid('a')).toBe(false)
})
test('123z should be invalid', ()=>{    
    expect(functions.isValid('123z')).toBe(false)
})
test('z123 should be invalid', ()=>{    
    expect(functions.isValid('z123')).toBe(false)
})

test('1231 should be invalid', ()=>{    
    expect(functions.isValid('1231')).toBe(false)
})
test('2231 should be invalid', ()=>{    
    expect(functions.isValid('2231')).toBe(false)
})
test('1233 should be invalid', ()=>{    
    expect(functions.isValid('1233')).toBe(false)
})
test('00 should be invalid', ()=>{    
    expect(functions.isValid('00')).toBe(false)
})

for(let i=0;i<50;i++){
    test('random number should be valid', ()=>{    
        expect(functions.isValid(functions.getRandomNumber())).toBe(true)
    })
}

test('(1234, 1234) should give (+ + + + )', ()=>{    
    expect(functions.getPlusMinus('1234','1234')).toBe('+ + + + ')
})

test('(1234, 1243) should give (+ + - - )', ()=>{    
    expect(functions.getPlusMinus('1243','1234')).toBe('+ + - - ')
})

test('(1234, 5678) should give ()', ()=>{    
    expect(functions.getPlusMinus('1243','5678')).toBe('')
})

test('(7856, 5678) should give (- - - - )', ()=>{    
    expect(functions.getPlusMinus('7856','5678')).toBe('- - - - ')
})

test('(7685, 5678) should give (+ - - - )', ()=>{    
    expect(functions.getPlusMinus('7685','5678')).toBe('+ - - - ')
})

test('(7610, 5678) should give (+ - )', ()=>{    
    expect(functions.getPlusMinus('7610','5678')).toBe('+ - ')
})

test('(2610, 5678) should give (+ )', ()=>{    
    expect(functions.getPlusMinus('2610','5678')).toBe('+ ')
})

test('(6310, 5678) should give (- )', ()=>{    
    expect(functions.getPlusMinus('6310','5678')).toBe('- ')
})