// keep in case of use for later in page creation
export default function ListItem({ children, ...props }) {
  return (
    <li
      className="list-group-item pt-4 d-flex justify-content-center align-items-center"
      {...props}
    >
      {children}
    </li>
  );
}
