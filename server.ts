import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { serveFile } from "https://deno.land/std@0.224.0/http/file_server.ts";

const server = serve({ port: 8000 });
console.log("Server running on http://localhost:8000/");

for await (const req of server) {
    const filePath = req.url === "/" ? "./index.html" : `.${req.url}`;
    try {
        const response = await serveFile(req, filePath);
        req.respond(response);
    } catch {
        req.respond({ status: 404, body: "404 - Not Found" });
    }
}