import React from "react";

import { PostLink } from "./post-link";
import { IPost } from "../types";

interface IProps {
    posts: IPost[];
    headingSize: 2 | 3;
}

export const PostList: React.FunctionComponent<IProps> = (props) => {
    const [state, setState] = React.useState<{
        likes: { post_id: string; like_count: number }[] | null;
    }>({ likes: null });

    React.useEffect(() => {
        fetch("https://ryanmaffey-dev.herokuapp.com/likes")
            .then((x) => x.json())
            .then((x) => setState({ likes: x }));
    }, []);

    return (
        <ol className="grid gap-8 grid-cols-1 md:grid-cols-2">
            {props.posts.map((p) => {
                const match =
                    state.likes &&
                    state.likes.filter((x) => x.post_id === p.id)[0];

                return (
                    <li key={p.id}>
                        <PostLink
                            post={p}
                            likes={match?.like_count ?? 0}
                            headingSize={props.headingSize}
                        />
                    </li>
                );
            })}
        </ol>
    );
};
