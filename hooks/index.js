"use client";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams, useParams, useRouter } from 'next/navigation';

export const useWindowUserAgent = () => {
    const [mobileAgent, setMobileAgent] = useState({ agent: false });
    const [toMatch, setToMatch] = useState([
        /iPhone/i,
        /Android/i,
        /webOS/i,
    ]);
    
    useEffect(() => {
        toMatch.some((toMatchItem) => {
            if( /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                setMobileAgent({ agent: true });
            }
        });
    }, []);
    return [mobileAgent.agent];
}

export const useWindowResize = () => {
    const [state, setState] = useState({ width:0, height: 0, paddingTop: 0, paddingBottom: 0, fontSize: 0 });
    const updateWindowDimensions = () => {
        setState({ width: window.outerWidth, height: window.innerHeight, paddingTop: window.innerHeight, paddingBottom: window.innerHeight, fontSize: window.innerHeight });
    }
    useEffect(() => {
        updateWindowDimensions()
        window.addEventListener("resize", updateWindowDimensions)
  
        return () => window.removeEventListener("resize", updateWindowDimensions)
    }, []);
    return [state.height, state.width, state.paddingTop, state.paddingBottom, state.fontSize];
}

export const useGetParamsUrl = (...param) => {
    let resulte = [];
    const searchParams = useSearchParams()
    param && param.length > 0 && param?.map((item) => searchParams?.get(item) && resulte?.push(searchParams?.get(item)))
    return resulte;
}

export const useGetUrlPathname = () => {
    const pathname = usePathname();
    return pathname;
}

export const useGetUrlSearch = () => {
    const location = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams()
    const params = useParams();
    return searchParams;
}

export const getPager = (defaultpagesize, totalItems, currentPage, pageSize) => {
    currentPage = currentPage || 1;

    pageSize = pageSize || defaultpagesize;

    var totalPages = Math.ceil(totalItems / pageSize);

    var startPage, endPage;
    if (totalPages <= defaultpagesize) {
        startPage = 1;
        endPage = totalPages;
    } else {
        if (currentPage <= 6) {
            startPage = 1;
            endPage = defaultpagesize;
        } else if (currentPage + 4 >= totalPages) {
            startPage = totalPages - (defaultpagesize - 1);
            endPage = totalPages;
        } else {
            startPage = currentPage - 5;
            endPage = currentPage + 4;
        }
    }

    var startIndex = (currentPage - 1) * pageSize;
    var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

    return {
        totalItems: totalItems,
        currentPage: currentPage,
        pageSize: pageSize,
        totalPages: totalPages,
        startPage: startPage,
        endPage: endPage,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: pages
    };
}

export const filterData = (data , filterTerm, propertyname) => {
    if (!filterTerm) {
        return data
    }
    return propertyname === 'phone_number' ? data.filter((item) => item.phone_number.includes(filterTerm.toLowerCase())) : data.filter((item) => item.name.includes(filterTerm.toLowerCase()));
}