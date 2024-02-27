"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
exports.Users = {
    auth: {
        verify: {
            generateEmailHTML: function (_a) {
                var token = _a.token;
                return "<a href='".concat(process.env.NEXT_PUBLIC_SERVER_URL, "/verify-email?token=").concat(token, "'>Magic link to log in.</a>");
            },
        },
    },
    access: {
        read: function () { return true; },
        create: function () { return true; },
    },
    slug: 'users',
    fields: [
        {
            name: 'role',
            admin: {
                condition: function () { return false; },
            },
            type: 'select',
            options: [
                { label: 'Admin', value: 'admin' },
                { label: 'User', value: 'user' },
            ],
        },
    ],
};
