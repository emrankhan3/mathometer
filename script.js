$('#inp').on('change',()=>{
    
    fVals = $('#inp').val();
    flag = 0
    vals=""
    for(var i=0; i<fVals.length; i++){
        if(fVals[i]=='-'){
            flag=1;
        }
    }
    ind=0;
    for(var i=0; i<fVals.length; i++){
        if( (fVals[i]>'9'||fVals[i]<'0' ) ){
            fVals[i] =' '
            if(vals.length>0 && vals[vals.length-1]==' ')continue;
            if(vals.length==0)continue;
            vals+=' '
            console.log(fVals[i] )
        }else vals+=fVals[i];
    }
    vals = vals.trim();
    arr = vals.split(" ");
    for(var i=0; i<arr.length; i++){
        arr[i]=parseInt(arr[i]*100)
    }
    console.log(arr)

})