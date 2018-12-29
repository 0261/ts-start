interface ISomeResponse {
    body: string;
    statusCode: number;
}

export async function hello(event: any, context: any) {
    const response: ISomeResponse = {
        body: JSON.stringify({
            message: Math.floor(Math.random() * 10),
        }),
        statusCode: 200
    };
    return response;
}