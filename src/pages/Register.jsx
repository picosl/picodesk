import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { AuthShell, Field } from './Login';

export default function Register() {
  return (
    <AuthShell title="Create your account" text="Start using PicoDesk for secure remote access.">
      <form className="space-y-5" onSubmit={(event) => event.preventDefault()}>
        <Field label="Full name" type="text" placeholder="Your name" />
        <Field label="Email address" type="email" placeholder="you@example.com" />
        <Field label="Password" type="password" placeholder="Create a password" />
        <Button type="submit" className="w-full">Create Account</Button>
      </form>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Already registered? <Link className="text-primary" to="/login">Sign in</Link>
      </p>
    </AuthShell>
  );
}
