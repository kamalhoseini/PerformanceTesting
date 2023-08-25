var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/test", async () => {
    var counter = 0;
    for (int i = 0; i <= 1000; i++)
    {
        counter = i;
        Console.WriteLine(i);
    }
    await Task.Delay(400);
});

app.Run();
