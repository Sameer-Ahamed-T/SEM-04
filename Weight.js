const fs =require('fs');
const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
}
);
const user=[];
function Input()
{
    rl.question('Enter the Name(X to stop):',(name)=>
    {
        if(name.toLowerCase()==='x')
        {
            fs.writeFileSync("user.json",JSON.stringify(user,2));
            CalculateBMI();
            return 
            ;
        
        }
        rl.question("Enter the height:",(height)=>
        {
            rl.question("Enter the Weight",(weight)=>
            {
                user.push({
                    name: name,
                    height: parseFloat(height),
                    weight: parseFloat(weight)
                });
                Input();
            });
        });
    }
    );
}
function CalculateBMI()
{
    const data=JSON.parse(fs.readFileSync("user.json"));
    const data1=data.map(user=>
    {
        const bmi=user.weight/(user.height**2);

        let status="";
        if(bmi<18.5)
            status="UnderWeight";
        else if(bmi<25)
            status="Normal";
        else if(bmi<30)
            status="Overweight";
        else
            status="Obese";
        return {
            ...user,
            bmi: bmi.toFixed(2),
            status: status
        };
    }
    );
    fs.writeFileSync("BMI.json",JSON.stringify(data1,2));
    rl.close();
}
Input();