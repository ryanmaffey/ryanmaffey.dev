import { GetStaticProps, GetStaticPropsResult } from "next";
import { BasicPage } from "../../components/pages";

import { IPage } from "../../types/page";
import { getPage } from "../../utils/page";

interface IProps {
    page: IPage;
}

export const getStaticProps: GetStaticProps<IProps> = async (): Promise<
    GetStaticPropsResult<IProps>
> => ({
    props: {
        page: await getPage("cookies"),
    },
});

export default BasicPage;
