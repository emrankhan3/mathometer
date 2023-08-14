
$('#menu_bar').click(()=>{
    $('#drop-down').slideToggle('hidden');
    console.log("im hit")
});
console.log("THIs");

// $('#drop-down').addClass('hidden');

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
    if(val<0)val*=-1
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
    if(val<0)val*=-1
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
    
    sv();
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

// $('button').on('click',()=>{
$('#inp').on('change',()=>{
    
      //  $('#primes').removeClass('hidden')
    
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
    ok = true;
    isNeg=0
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
    if(mx-mx<10000000 && mx<10000000 && mn<10000000){
        ok=true;
    }
     for(var i=0; i<arr.length; i++){sum+=arr[i]}
    //   //  console.log(arr[i],': ',primeDivisor(arr[i]))
    // }
    //sv();
   // findPrimes(1,10);
    if(flag && ok){
        
        primes=findPrimes(arr[0],arr[arr.length-1]);
      //  console.log(primes)
        
    }
   // sv();
    //for(i=2; i<40;i++)if(mp[i]==undefined)console.log(i)
    

    if(mx<100000000 && mx<100000000)ok=true;
    
    
    
    tr = arr.slice();
    
    tr.sort((a,b)=>a-b)
    srt="Sorted array: <span class='prop'>"
    tr.forEach(element => {
        srt+=`${element} `  
    });
    srt+='</span>'
    
    
    
    primeDivStr=''
    if(ok)
    for(i=0; i<arr.length; i++){
        primeDivStr+=`<div class="prime-divsor shadow-md px-2 py-1 rounded-md bg-[#ffffff]">${arr[i]}: `;
        pd = primeDivisors(arr[i]);
        for(j=0; j<pd.length;j++){
            s = `${pd[j]} `
            primeDivStr+=s
        }
        primeDivStr+=`</div>`
    }
    
    divisorsStr = '';
    if(ok)
    for(i=0; i<arr.length; i++){
        divisorsStr+=`<div class="divisor shadow-md px-2 py-1 rounded-md bg-[#ffffff]">${arr[i]}: `;
        pd = divisors(arr[i]);
        for(j=0; j<pd.length;j++){
            s = `${pd[j]} `
            divisorsStr+=s
        }
        divisorsStr+=`</div>`
    }    
    kad = kadanesAlg(arr)

    prop = `minimum value: <span class="prop"> ${mn}</span>, maximum value:   <span class="prop shadow-inner bg-white text-black px-3 py-1 rounded-md ">${mx}</span>, sum: <span class='prop'>${sum}</span>, maximum substring sum: <span class='prop'>${kad}</span>`;
    
    lis = LIS(arr);
    lisStr = `Longest Increasing Subsequence [size: ${lis.length}]: <span class='prop'>`;
    for(i=0; i<lis.length;i++){
        st = `${lis[i]} `;
        lisStr+=st;
    }
    lisStr+='</span>'
    
    // rendering begins here/..................
    
    if(!flag)$('#sort').html(srt)
    console.log(st)
    if(flag){
        $('#primes').removeClass('hidden')
        console.log("heere")
        _primes = findPrimes(mn,mx);
        st = `[Number of primes: ${_primes.length}] <span class='prop'>`;
     //   console.log(_primes)

        for(i=0; i<_primes.length; i++){
            temp= `${_primes[i]} `
            st+=temp;
        }
        st+='</span>'
        console.log(st)
        $('#primes').html(st)
    }
   // if(!flag){        $('#primes').removeClass('hidden')    }
    $('#prop').html(prop)
    $('#divisors').html(divisorsStr)
//$('#kad').html(kadStr)
    $('#prime_div').html(primeDivStr)
    if(!flag)$('#lis').html(lisStr)
    
    $('.up').toggleClass('hidden');
    $('.down').toggleClass('hidden');
    $('.prime-div').click(()=>{
        $('#prime_div').slideToggle();
        
        $('.up').toggleClass('hidden');
        $('.down').toggleClass('hidden');
    })
    
    $('.up2').toggleClass('hidden');
    $('.down2').toggleClass('hidden');
    $('.divisors').click(()=>{
        $('#divisors').slideToggle();
        
        $('.up2').toggleClass('hidden');
        $('.down2').toggleClass('hidden');
    })

    
})