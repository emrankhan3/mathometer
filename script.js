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
kadanesAlg = (ar)=>{
    m = 0
    ans = 0
    for(i=0; i<ar.length; i++){
        m+=ar[i];
        m=Math.max(m,0)
        ans=Math.max(m,ans)
    }
    return ans
}
sorted = (ar)=>{
     arr =[];
     for(i=0; i<ar.length;i++){
        arr[i]=ar[i]
     }
     arr.sort((a,b)=>a-b)
    return arr
}
LIS = (ar)=>{
    ans = [];
    idx=0;
    binarySearch = (ar,val) =>{
        l=0,r=ar.length;
        while(l<r){
            mid = Math.floor((r+l)/2);
          //  console.log(l,r,mid);
            if(ar[mid]<val)l=mid+1;
            else r=mid;
        }
        return l;
    }
    ans[0]=ar[0];

    for(i=1; i<ar.length; i++){
        if(binarySearch(ans,ar[i])==ans.length){
            ans[ans.length]=ar[i];
        }
        else ans[binarySearch(ans,ar[i])]=ar[i];
    }
    return ans;
}
divisors = (val)=>{
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
primeDivisors = (val)=>{
    ar=[]
    idx=0
    for(i=2; i<val;i++){
        if(val%i==0){
            ar[idx++]=i;
            while(val%i==0){val=val/i}
        }

    }
    if(val!=1)ar[idx]=val
    return ar;
}
findPrimes = (l,r)=>{
    ar=[]
   // console.log('find primes is called',l,r)
    ind=0
    if(l<2)l=2;
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
        if(fVals[i]==':'){
            flag=1;
        }
    }
    ind=0;
    for(var i=0; i<fVals.length; i++){
        if( (fVals[i]>'9'||fVals[i]<'0' && fVals[i]!='-') ){
            fVals[i] =' '
            if(vals.length>0 && vals[vals.length-1]==' ')continue;
            if(vals.length==0)continue;
            vals+=' '
            // console.log(fVals[i] )
        }else vals+=fVals[i];
    }
    vals = vals.trim();
    arr = vals.split(" ");
    sum=0;
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
    
     for(var i=0; i<arr.length; i++){sum+=arr[i]}
    //   //  console.log(arr[i],': ',primeDivisor(arr[i]))
    // }
    //sv();
   // findPrimes(1,10);
    if(flag){
        
        primes=findPrimes(arr[0],arr[arr.length-1]);
      //  console.log(primes)
        
    }
   // sv();
    //for(i=2; i<40;i++)if(mp[i]==undefined)console.log(i)
    



    prop = `minimum value: <span class='prop'> ${mn}</span>, maximum value:   <span class='prop'>${mx}</span>, sum: <span class='prop'>${sum}</span>`;



    tr = arr.slice();

    tr.sort((a,b)=>a-b)
    st=""
    tr.forEach(element => {
      st+=' '+element  
    });
    
    // rendering begins here/..................
    $('#prop').html(prop)
    
    if(!flag)$('#sort').html(st)
    
    if(flag){
        console.log("heere")
        _primes = findPrimes(mn,mx);
        st = "";
        console.log(_primes)
        for(i=0; i<_primes.length; i++){
            temp= ` ${_primes[i]}`
            st+=temp;
        }
        console.log(st)
        $('#primes').html(st)
    }
    divisorsStr = '';
    for(i=0; i<arr.length; i++){
        divisorsStr+=`${arr[i]}: `;
        pd = divisors(arr[i]);
        for(j=0; j<pd.length;j++){
            s = `${pd[j]} `
            divisorsStr+=s
        }
        divisorsStr+=`<br>`
    }    
    $('#divisors').html(divisorsStr)
   
    primeDivStr=''
    for(i=0; i<arr.length; i++){
        primeDivStr+=`${arr[i]}: `;
        pd = primeDivisors(arr[i]);
        for(j=0; j<pd.length;j++){
            s = `${pd[j]} `
            primeDivStr+=s
        }
        primeDivStr+=`<br>`
    }
    $('#prime_div').html(primeDivStr)
    kad = kadanesAlg(arr)
    kadStr = ''
    for(i=0; i<kad.length;i++){
        st = `${kad[i]} `;
        kadStr+=st;
    }
    console.log('kad ',kad)
    $('#kad').html(kadStr)
})