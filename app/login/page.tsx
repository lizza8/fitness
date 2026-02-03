export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="glass-panel w-full max-w-md rounded-3xl p-8 text-center">
        <h1 className="text-2xl font-semibold text-gradient">Welcome back</h1>
        <p className="mt-2 text-sm text-[var(--text-muted)]">
          Secure access with role-based views
        </p>
        <div className="mt-6 space-y-3">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus-visible:focus-ring"
            aria-label="Email address"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus-visible:focus-ring"
            aria-label="Password"
          />
          <button
            type="button"
            className="neumorphic w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-3 text-sm font-semibold text-white"
          >
            Sign in
          </button>
        </div>
        <p className="mt-4 text-xs text-[var(--text-muted)]">
          Admin or tenant access is selected after verification.
        </p>
      </div>
    </div>
  );
}
