mp={}
sv = ()=>{

    for(i=2; i*i<=10000000;i++){
        if(mp[i]==undefined){
            for(j=i+i; j<=10000000;j+=i){
                mp[j]=1
            }
        }
    }
}


primeDivisor = (val)=>{
    ar=[]
    ind=0
    for(i=1; i*i<=val; i++){
        if(val%i==0){
            ar[ind++]=i;
            if(i!=val/i)ar[ind++]=val/i
        }
    }
    ar.sort((a,b)=>a-b);
    return ar
}
findPrimes = (l,r)=>{
    ar=[]
    sv();
    ind=0
    for(i=2; i<=r; i+=2){
        if(mp[i]==undefined){
            ar[ind++]=i;
        }
    }
    return ar
}


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
    
    mn=999999999999999
    mx=-999999999999999
    for(var i=0; i<arr.length; i++){
        arr[i]=parseInt(arr[i])
        
        mn=Math.min(mn,arr[i])
        mx=Math.max(mx,arr[i])
    }
    if(flag){
        if(arr[0]>arr[1]){
            [arr[0], arr[1]]=[arr[1],arr[0]]
        }
        ind=0;
        r=arr[1]
        for(l=arr[0]; l<=r; l++){
            arr[ind++]=l;
            mn=Math.min(mn,arr[ind])
            mx=Math.max(mx,arr[ind])
        }
    }
    console.log(arr,mn,mx)
    for(var i=0; i<arr.length; i++){
      //  console.log(arr[i],': ',primeDivisor(arr[i]))
    }
    //sv();
    if(flag){
        primes = findPrimes(arr[0],arr[1]);
        console.log('primes',primes)
    }

})