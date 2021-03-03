export default function (context) {
    if (!context.store.getters['posts/isAuthenticated']) {
        context.redirect('/admin/auth')
    }
}