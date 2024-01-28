import { Link } from "react-router-dom";


function Pagination({setPage, page = 1, total = 0, offset = 2 }) {

    total = Math.ceil(total*1.0 / 6);

    if (total <= 1) {
        return "";
    }

    let from = page - offset;
    let to = page + offset;

    if (from < 1) {
        from = 1;
    }

    if (to > total) {
        to = total;
    }

    const links = [];

    for (let i = from; i <= to; i++) {
        links.push(i);
    }

    return (
        <>
            <nav aria-label="Page navigation">
                <ul
                    className="pagination"
                >
                    <li className={"page-item" + (page === 1 ? " disabled" : "")}>
                        <a
                            className="page-link"
                            onClick={() => setPage(1)}
                            aria-label="First">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>

                    <li className={"page-item" + (page === 1 ? " disabled" : "")}>
                        <a
                            className="page-link"
                            onClick={() => setPage(page - 1)}
                            aria-label="Previous">
                            <span aria-hidden="true">&lt;</span>
                        </a>
                    </li>

                    {links.map((link) => (
                        <li key={link} className={"page-item" + (page === link ? " active" : "")}>
                            <a
                                className="page-link"
                                onClick={() => setPage(link)}
                            >
                                <span>
                                    {link}
                                </span>
                            </a>
                        </li>
                    ))}

                    <li className={"page-item" + (page === total ? " disabled" : "")}>
                        <a
                            className="page-link"
                            onClick={() => setPage(page +1)}
                            aria-label="Next">
                            <span aria-hidden="true">&gt;</span>
                        </a>
                    </li>

                    <li className={"page-item" + (page === total ? " disabled" : "")}>
                        <a
                            className="page-link"
                            onClick={() => setPage(total)}
                            aria-label="Last">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>

        </>
    )
}

export default Pagination;