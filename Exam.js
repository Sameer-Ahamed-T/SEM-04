const fs =require('fs');
const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
}
);
let i=0;
const arry=[];
function Input()
{
    rl.question("Do you Enter the record(X to stop)",(i)=>
    {
        if(i.toLowerCase()==='x')
        {
            fs.writeFileSync("Ex.json",JSON.stringify(arry,null,2));
            Output();
            return;
        }
        rl.question("Enter the Name:",(name)=>
        {
            rl.question("Enter the Age:",(age)=>
            {
                arry.push(
                    {
                        name: name,
                        age: parseFloat(age)
                    });
                    Input();
            });
        });
    });
}
function Output()
{
    console.log("The Records are:");
    const d=JSON.parse(fs.readFileSync("Ex.json"));
    d.forEach((d1)=>
    {
        console.log("")
        console.log(`Name:${d1.name}, Age:${d1.age}`);
    })
}
Input();
