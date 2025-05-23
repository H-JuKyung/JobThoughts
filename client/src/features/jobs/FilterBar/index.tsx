import Dropdown from '@/components/Dropdown';
import { FilterBarWrapper } from './styles';

type Props = {
  locationFilter: string;
  setLocationFilter: (value: string) => void;
  typeFilter: string;
  setTypeFilter: (value: string) => void;
  sortFilter: string;
  setSortFilter: (value: string) => void;
};

export default function FilterBar({
  locationFilter,
  setLocationFilter,
  typeFilter,
  setTypeFilter,
  sortFilter,
  setSortFilter,
}: Props) {
  return (
    <FilterBarWrapper>
      <Dropdown
        options={['전체', '서울', '대전', '대구', '부산']}
        selected={locationFilter}
        onSelect={setLocationFilter}
        placeholder="지역"
      />
      <Dropdown
        options={['전체', '정규직', '계약직', '아르바이트', '프리랜서']}
        selected={typeFilter}
        onSelect={setTypeFilter}
        placeholder="고용형태"
      />
      <Dropdown
        options={['오름차순', '내림차순']}
        selected={sortFilter}
        onSelect={setSortFilter}
        placeholder="정렬"
      />
    </FilterBarWrapper>
  );
}
