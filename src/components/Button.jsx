import { Link } from "react-router-dom";

const styles = {
  primary: `
    group
    inline-flex
    items-center
    justify-center
    rounded-2xl
    bg-gradient-to-r
    from-blue-600
    via-blue-500
    to-cyan-500
    px-7
    py-3.5
    text-base
    font-semibold
    text-white
    shadow-[0_10px_35px_rgba(37,99,235,0.35)]
    transition-all
    duration-500
    ease-out
    hover:-translate-y-1
    hover:scale-105
    hover:shadow-[0_20px_50px_rgba(37,99,235,0.55)]
    active:scale-95
  `,

  outline: `
    inline-flex
    items-center
    justify-center
    rounded-2xl
    border
    border-slate-700
    bg-white/5
    backdrop-blur-xl
    px-7
    py-3.5
    text-base
    font-semibold
    text-slate-200
    transition-all
    duration-500
    ease-out
    hover:-translate-y-1
    hover:scale-[1.03]
    hover:border-blue-500
    hover:bg-blue-500/10
    hover:text-white
    hover:shadow-[0_15px_40px_rgba(37,99,235,0.25)]
    active:scale-95
  `,

  ghost: `
    inline-flex
    items-center
    justify-center
    rounded-2xl
    px-7
    py-3.5
    text-base
    font-semibold
    text-slate-300
    transition-all
    duration-300
    hover:bg-slate-800/70
    hover:text-white
  `,
};

export default function Button({
  to,
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const classes = `${styles[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}