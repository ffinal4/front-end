import React, { useEffect, useRef, useState } from "react";
import {
  CardContainer,
  Filter,
  FilterContainer,
  FilterdropdownMenuContainer,
  TradeRequestListContainer,
} from "../TradeRequestPage/GetRequestList";
import {
  ArrowImg,
  GetRequest,
  RequestIngNumber,
  RequestStateContainer,
  RequestStateNumber,
  SendRequest,
  TabContainer,
} from "../../pages/TradeRequestPage";
import arrow from "../../assets/icon/arrow.png";
import AuctionRequestCard from "./AuctionRequestCard";
import { DotImg } from "../TradeRequestPage/TradeRequestCard";
import bluedot from "../../assets/icon/bluedot.png";
import blackdot from "../../assets/icon/blackdot.png";
import { useQuery } from "react-query";
import { getMyAuctionCheckApi } from "../../api/acution";
import AuctionFilterDropdownMenu from "./AuctionFilterDropdownMenu";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { auctionCategory, myAuctionFilter } from "../../store/filterCategory";
import SellerPickModal from "../AuctionDetailPage/SellerPickModal";
import SuccessBIdModal from "../AuctionDetailPage/SuccessBIdModal";
import Paging from "../common/Paging/Paging";
import { pagination } from "../../store/pagination";
import LoadingSpinner from "../common/LoadingSpinner";
import DetailGoodsModal from "../TradeRequestPage/DetailGoodsModal";

interface MyAuctionListProps {
  filterTap: any;
  auctionFilterOpen: boolean;
  dropdownMenu: string;
  setAuctionFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setDropdownMenu: React.Dispatch<React.SetStateAction<string>>;
  setFilterTap: React.Dispatch<
    React.SetStateAction<{ myAuctionTap: boolean; bidAuctionTap: boolean }>
  >;
}

const MyAuctionList: React.FC<MyAuctionListProps> = ({
  auctionFilterOpen,
  filterTap,
  dropdownMenu,
  setAuctionFilterOpen,
  setDropdownMenu,
  setFilterTap,
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const currentPage = useRecoilValue(pagination);
  const resetPage = useResetRecoilState(pagination);
  const [category, setCategory] = useState<string | null>("");
  const [filter, setFilter] = useState("전체");
  const [detailData, setDetailData] = useState<any>(null);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [sellerPicks, setSellerPicks] = useState<{
    pickModal: boolean;
    successBidModal: boolean;
  }>({
    pickModal: false,
    successBidModal: false,
  });
  const { pickModal, successBidModal } = sellerPicks;

  console.log("filter", category);

  const { data, isLoading, error }: any = useQuery(
    ["getMyAuctionCheckData", currentPage, category],
    () => getMyAuctionCheckApi(currentPage, category)
  );

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setAuctionFilterOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const myAuctionOnclick = () => {
    resetPage();
    setFilterTap({
      myAuctionTap: false,
      bidAuctionTap: true,
    });
  };
  console.log("경매현황페이지 내경매 데이터", data);

  if (isLoading) return <LoadingSpinner />;
  console.log("내경매현황 데이터", data);
  if (error) {
    console.log(error);
  }

  return (
    <div style={{ position: "relative" }}>
      <TabContainer>
        <GetRequest>내 경매</GetRequest>
        <SendRequest onClick={myAuctionOnclick}>입찰 경매</SendRequest>
      </TabContainer>
      <TradeRequestListContainer>
        <FilterContainer>
          <Filter
            ref={divRef}
            onClick={() => {
              setAuctionFilterOpen(!auctionFilterOpen);
            }}
          >
            <div>{filter}</div>
            {/* {dropdownMenu} */}
            <ArrowImg src={arrow} />
          </Filter>
          {auctionFilterOpen && (
            <FilterdropdownMenuContainer>
              <AuctionFilterDropdownMenu
                auctionFilterOpen={auctionFilterOpen}
                setAuctionFilterOpen={setAuctionFilterOpen}
                setDropdownMenu={setDropdownMenu}
                setFilter={setFilter}
                setCategory={setCategory}
              />
            </FilterdropdownMenuContainer>
          )}
        </FilterContainer>
        <CardContainer>
          {data?.data.content.length > 0 &&
            data?.data.content?.map((item: any) => {
              return (
                <AuctionRequestCard
                  key={item.auctionId}
                  item={item}
                  setSellerPicks={setSellerPicks}
                  sellerPicks={sellerPicks}
                  setDetailModalOpen={setDetailModalOpen}
                  setDetailData={setDetailData}
                />
              );
            })}
        </CardContainer>
        {pickModal && (
          <SellerPickModal
            setSellerPicks={setSellerPicks}
            sellerPicks={sellerPicks}
          />
        )}
        {successBidModal && (
          <SuccessBIdModal
            setSellerPicks={setSellerPicks}
            sellerPicks={sellerPicks}
          />
        )}
        {detailModalOpen && (
          <DetailGoodsModal
            detailData={detailData}
            detailModalOpen={detailModalOpen}
            setDetailModalOpen={setDetailModalOpen}
          />
        )}
      </TradeRequestListContainer>
      <Paging />
    </div>
  );
};

export default MyAuctionList;
