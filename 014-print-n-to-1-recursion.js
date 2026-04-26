function print(num){
    if(num < 1) return;
    console.log(num)
    --num
    print(num)
}
print(5)