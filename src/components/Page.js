import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {Pagination} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import PageItem from "./PageItem";

const Page = observer(() => {
    const {item} = useContext(Context)
    const [currentPage, setCurrentPage] = useState(item.page)
    const pageCount = Math.ceil(item.totalCount / item.limit)
    const pages = []

    for(let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    if (pages.length <= 5) {
        return (
            <Pagination>
                {pages.map(page =>
                    <PageItem key={page} onClick={() => {
                        item.setPage(page)
                        setCurrentPage(page)
                    }} active={currentPage === page} page={page} />
                )}
            </Pagination>
        );
    } else {
        if (currentPage >= 1 && currentPage <= 3) {
            return (
                <Pagination>
                    <PageItem onClick={() => {
                        item.setPage(1)
                        setCurrentPage(1)
                    }} active={currentPage === 1} page={1} />
                    <PageItem onClick={() => {
                        item.setPage(2)
                        setCurrentPage(2)
                    }} active={currentPage === 2} page={2} />
                    <PageItem onClick={() => {
                        item.setPage(3)
                        setCurrentPage(3)
                    }} active={currentPage === 3} page={3} />
                    {currentPage === 3 ?
                        <PageItem onClick={() => {
                            item.setPage(4)
                            setCurrentPage(4)
                        }} active={currentPage === 4} page={4} />
                        :
                        <div/>
                    }
                    <PageItem active={false} page={'✖'} />
                    <PageItem onClick={() => {
                        item.setPage(pages[pages.length-1])
                        setCurrentPage(pages[pages.length-1])
                    }} active={currentPage === pages[pages.length-1]} page={pages[pages.length-1]} />
                </Pagination>
            )
        }
        if (currentPage >= pages[pages.length-3] && currentPage <= pages[pages.length-1]) {
            return (
                <Pagination>
                    <PageItem onClick={() => {
                        item.setPage(1)
                        setCurrentPage(1)
                    }} active={currentPage === 1} page={1} />
                    <PageItem active={false} page={'✖'} />
                    {currentPage === pages[pages.length-4] ?
                        <PageItem onClick={() => {
                            item.setPage(pages[pages.length-4])
                            setCurrentPage(pages[pages.length-4])
                        }} active={currentPage === pages[pages.length-4]} page={pages[pages.length-4]} />
                        :
                        <div/>
                    }
                    <PageItem onClick={() => {
                        item.setPage(pages[pages.length-3])
                        setCurrentPage(pages[pages.length-3])
                    }} active={currentPage === pages[pages.length-3]} page={pages[pages.length-3]} />
                    <PageItem onClick={() => {
                        item.setPage(pages[pages.length-2])
                        setCurrentPage(pages[pages.length-2])
                    }} active={currentPage === pages[pages.length-2]} page={pages[pages.length-2]} />
                    <PageItem onClick={() => {
                        item.setPage(pages[pages.length-1])
                        setCurrentPage(pages[pages.length-1])
                    }} active={currentPage === pages[pages.length-1]} page={pages[pages.length-1]} />
                </Pagination>
            )
        }
        if (currentPage > 3 && currentPage < pages[pages.length-3]) {
            return (
                <Pagination>
                    <PageItem onClick={() => {
                        item.setPage(1)
                        setCurrentPage(1)
                    }} active={currentPage === 1} page={1} />
                    <PageItem active={false} page={'✖'} />
                    <PageItem onClick={() => {
                        item.setPage(currentPage-1)
                        setCurrentPage(currentPage-1)
                    }} active={false} page={currentPage-1} />
                    <PageItem onClick={() => {
                        item.setPage(currentPage)
                        setCurrentPage(currentPage)
                    }} active={true} page={currentPage} />
                    <PageItem onClick={() => {
                        item.setPage(currentPage+1)
                        setCurrentPage(currentPage+1)
                    }} active={false} page={currentPage+1} />
                    <PageItem active={false} page={'✖'} />
                    <PageItem onClick={() => {
                        item.setPage(pages[pages.length-1])
                        setCurrentPage(pages[pages.length-1])
                    }} active={currentPage === pages[pages.length-1]} page={pages[pages.length-1]} />
                </Pagination>
            )
        }
    }

});

export default Page;