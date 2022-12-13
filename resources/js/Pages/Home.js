import React from "react";
import { Link } from "@inertiajs/inertia-react";

const Welcome = ({ name, arr }) => {
    return (
        <div>
            <h1>Hello {name}</h1>
            <nav>
                <ul>
                    <li>
                        <Link href="/lookup">Lookup</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Welcome;
