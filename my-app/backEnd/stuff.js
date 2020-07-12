let value = 1
let step = 0
let cat = (Maxvalue,value,step) => {
        function loop(value)
        {  return   value = 2 * (value + 1)
        }
        if(value !== Maxvalue){
            step++
            return loop( value)
        }else{
            return step
        }
        

 
}