import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
//COMPONENTS
import { AvatarsList, CardComponent, CustomChart, CustomTable, Header, StyledH2, StyledH3, StyledSpan, } from '@/components';
import { Container, Grid } from '@mui/material';
//HOOKS
import { useGet } from '@/hooks';
//UTILS
import { currencyConverter, highlightTextConvert } from '@/utils';
function Home() {
    const { data: highlightsData, loading: highlightsLoading, error: highlightsError, } = useGet('sales/highlights');
    const { data: salesMonthData, loading: salesMonthLoading, error: salesMonthError, } = useGet('sales/month');
    const { data: salesStarsData, loading: salesStarsLoading, error: salesStarsError, } = useGet('sales/stars');
    const { data: newsData, loading: newsLoading, error: newsError, } = useGet('news');
    const { data: salesYearData, loading: salesYearLoading, error: salesYearError, } = useGet('sales/year');
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx(Container, { className: "mb-2", maxWidth: "lg", children: _jsxs(Grid, { container: true, spacing: 4, children: [!highlightsError && (_jsxs(_Fragment, { children: [_jsx(Grid, { item: true, xs: 12, md: 4, children: _jsx(CardComponent, { className: highlightsLoading
                                            ? 'skeleton-loading skeleton-loading-mh-1'
                                            : '', children: !highlightsLoading && highlightsData && (_jsxs(_Fragment, { children: [_jsx(StyledH2, { className: "mb-1", children: "Total de Vendas no m\u00EAs" }), _jsx(StyledH3, { className: "mb-1", size: 40, lineheight: 40, children: currencyConverter(highlightsData[0].value) }), _jsx(StyledSpan, { children: highlightsData[0].subtitle })] })) }) }), _jsx(Grid, { item: true, xs: 12, md: 4, children: _jsx(CardComponent, { className: highlightsData
                                            ? highlightsData[1].subtitle
                                            : 'skeleton-loading skeleton-loading-mh-1', children: !highlightsLoading && highlightsData && (_jsxs(_Fragment, { children: [_jsx(StyledH2, { className: "mb-1", color: "white", children: "Meta do m\u00EAs" }), _jsx(StyledH3, { className: "mb-1", size: 40, lineheight: 40, color: "white", children: currencyConverter(highlightsData[1].value) }), _jsx(StyledSpan, { color: "white", children: highlightTextConvert(highlightsData[1].subtitle) })] })) }) }), _jsx(Grid, { item: true, xs: 12, md: 4, children: _jsx(CardComponent, { className: highlightsLoading
                                            ? 'skeleton-loading skeleton-loading-mh-1'
                                            : '', children: !highlightsLoading && highlightsData && (_jsxs(Link, { to: "/leads", children: [_jsx(StyledH2, { className: "mb-1", children: "Leads contactados" }), _jsx(StyledH3, { className: "mb-1", size: 40, lineheight: 40, children: highlightsData[2].value }), _jsx(StyledSpan, { children: highlightsData[2].subtitle })] })) }) })] })), _jsx(Grid, { item: true, xs: 12, md: 7, children: !salesMonthError && (_jsx(CardComponent, { className: salesMonthLoading
                                    ? ' skeleton-loading skeleton-loading-mh-2'
                                    : '', children: !salesMonthLoading && salesMonthData && (_jsxs(_Fragment, { children: [_jsx(StyledH2, { className: "mb-1", children: "Valor de vendas no m\u00EAs" }), _jsx(CustomChart, { labels: salesMonthData.labels.map((label) => label), data: salesMonthData.data.map((data) => data), type: salesMonthData.type })] })) })) }), _jsx(Grid, { item: true, xs: 12, md: 5, children: !salesStarsError && (_jsx(CardComponent, { className: salesStarsLoading
                                    ? 'skeleton-loading skeleton-loading-mh-2'
                                    : '', children: !salesStarsLoading && salesStarsData && (_jsxs(_Fragment, { children: [_jsx(StyledH2, { className: "mb-1", children: "Maiores vendedores no m\u00EAs" }), _jsx(AvatarsList, { listData: salesStarsData.map((star) => ({
                                                avatar: '/dnc-avatar.svg',
                                                name: star.name,
                                                subtitle: currencyConverter(star.value),
                                            })) })] })) })) }), _jsx(Grid, { item: true, xs: 12, md: 5, children: !newsError && (_jsx(CardComponent, { className: newsLoading ? 'skeleton-loading skeleton-loading-mh-2' : '', children: !newsLoading && newsData && (_jsxs(_Fragment, { children: [_jsx(StyledH2, { className: "mb-1", children: "Not\u00EDcias Relevantes" }), _jsx(CustomTable, { headers: ['Título', 'Horário'], rows: newsData.map((news) => [
                                                _jsx("a", { className: "ellipsis ellipsis-sm", href: news.link, target: "_blank", children: news.title }),
                                                _jsx("a", { href: news.link, target: "_blank", children: news.date }),
                                            ]) })] })) })) }), _jsx(Grid, { item: true, xs: 12, md: 7, children: !salesYearError && (_jsx(CardComponent, { className: salesYearLoading
                                    ? ' skeleton-loading skeleton-loading-mh-2'
                                    : '', children: !salesStarsLoading && salesYearData && (_jsxs(_Fragment, { children: [_jsx(StyledH2, { className: "mb-1", children: "Valor de vendas no ano" }), _jsx(CustomChart, { labels: salesYearData.labels.map((label) => label), data: salesYearData.data.map((data) => data), type: salesYearData.type })] })) })) })] }) })] }));
}
export default Home;
