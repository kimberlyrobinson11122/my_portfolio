export default function Card({img, title, description, repoLink, deployedLink, languages}) {
  return (
    <div className="card">
    <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{languages}</h6>
        <p className="card-text">
          {description}
        </p>
        <a href={repoLink} className="card-link">
          GitHub Repo
        </a>
        <a href={deployedLink} className="card-link">
          Demo App
        </a>
      </div>
    </div>
  );
}
