GET https://44v8220mp9.execute-api.us-east-1.amazonaws.com/dev

endpoint za provjeru autentifikacije
user: admin,
password: admin

POST https://44v8220mp9.execute-api.us-east-1.amazonaws.com/dev/weather

Endpoint koji vraća prognozu.
shema:
{
city: string,
time: number
}
