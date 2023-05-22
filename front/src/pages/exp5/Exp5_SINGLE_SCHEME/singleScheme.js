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
 * 三个参数,分别为CU,CO,ic
*/
function NPV(CI,CO,ic){
    console.log("dadasd")
    res=0
    for(var i=0;i<CI.length;i++){
        res+=(CI[i]-CO[i])*(Math.pow(1+ic[i],-t[i]))
    }
    console.log(res)
    return res
}

function IRR(CI,CO,t){
    irr=0.000001
    NPV=1
    while(NPV<0.001&&irr<1.1){
        NPV=0
        for(var i=0;i<CI.length;i++){
            NPV+=(CI[i]-CO[i])*(Math.pow(1+irr,-t[i]))
        }
        irr+=0.000001
    }
    return irr
}
function DPP(CI,CO,ic){
    return IRR(CI,CO,ic)
}

module.exports = {
    ROi,
    ROE,
    PT,
    IRR,
    NPV,
    DPP,
}