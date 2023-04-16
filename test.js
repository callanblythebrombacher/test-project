const test = (searchString)=>{
    const regTest1 = /\s\'/g;
    const regTest2 = /\'\s/g;
    let bottomQuoteIndex = searchString.search(regTest1);
    let topQuoteIndex = searchString.search(regTest2);

}


"francois' can run up it's tree"