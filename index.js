// code your solution here

function saturdayFun(fun){
    if (fun == undefined){
    return 'This Saturday, I want to roller-skate!';
    }
    else{
        return `This Saturday, I want to ${fun}!`
       
    }
}

function mondayWork(work){
    if (work == undefined){
        return 'This Monday, I will go to the office.';
    }
    else{
        return `This Monday, I will ${work}.`;
    }
}

function wrapAdjective(adj){
    return function (special){
        return `You are ${adj}${special}${adj}!`;
    }
    return 
}

