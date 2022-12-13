import React from "react";
import { Link } from "@inertiajs/inertia-react";

const Lookup = () => {
    return (
        <div>
            <h1>Hello World from Lookup</h1>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Lookup;
