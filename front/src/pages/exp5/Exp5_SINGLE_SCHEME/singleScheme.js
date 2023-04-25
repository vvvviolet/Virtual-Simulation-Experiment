function Roi(EBIT,TI){
    return (EBIT*100/TI).toFixed(2)+"%"
}
function ROE(NP,EC){
    return (NP*100/EC).toFixed(2)+"%"
}
function PT(a,b,c){
    return (a-1+Math.abs(b)/c).toFixed(2)
}
/**
 * 四个参数均为列表,分别为CU,CO,ic,t
*/
function NPV(CI,CO,ic,t){
    len=CI.length
    res=0
    for(var i=0;i<len;i++){
        res+=(CI[i]-CO[i])*(Math.pow(1+ic[i],-t[i]))
    }
    return res
}

function IRR(CI,CO,t){
    irr=0.000001
    NPV=1
    while(NPV<0.001){
        NPV=0
        for(var i=0;i<CI.length;i++){
            NPV+=(CI[i]-CO[i])*(Math.pow(1+irr,-t[i]))
        }
    }
    return irr
}
function DPP(CI,CO,ic){
    return IRR(CI,CO,ic)
}

export default{
    ROi,
    ROE,
    PT,
    IRR,
    NPV,
    DPP,
}