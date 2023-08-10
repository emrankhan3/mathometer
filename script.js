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
   // console.log('find primes is called',l,r)
    ind=0
        for(i=l; i<=r; i++){
            if(mp[i]==undefined){
                ar[ind++]=i;
          //      console.log(i)
    
            }
           // else console.log(i,'is not prime')
         //   console.log(i)

        }
    
    return ar
}


$('#inp').on('change',()=>{
    
    sv();
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
            mn=Math.min(mn,arr[ind-1])
            mx=Math.max(mx,arr[ind-1])
        }
    }
    
    // for(var i=0; i<arr.length; i++){
    //   //  console.log(arr[i],': ',primeDivisor(arr[i]))
    // }
    //sv();
   // findPrimes(1,10);
    if(flag){
        
        primes=findPrimes(arr[0],arr[arr.length-1]);
        console.log(primes)
        
    }
   // sv();
    //for(i=2; i<40;i++)if(mp[i]==undefined)console.log(i)

})