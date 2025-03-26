import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        const token = localStorage.getItem('token')
        // Clone the request and modify it
        const modifiedReq = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token}`)
        });
        
        // Pass the modified request to the next handler
        return next.handle(modifiedReq);
    }
}