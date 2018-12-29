interface ISomeResponse {
    statusCode: number;
    body: string;
}

export async function hello(event: any, context: any) {
    const response: ISomeResponse = {
        body: JSON.stringify({
            message: Math.floor(Math.random() * 10)
        }),
        statusCode: 200,
    };

    return response
};