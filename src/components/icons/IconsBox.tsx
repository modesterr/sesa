import { Link } from 'react-router-dom';

import AdditionalResidentSvg from './sidebar/AdditionalResidentSvg';
import AdminsSvg from './sidebar/AdminsSvg';
import AdvertSvg from './sidebar/AdvertSvg';
import ArtisanSvg from './sidebar/ArtisanSvg';
import EstateManagerSvg from './sidebar/EstateManagerSvg';
import EstatesSvg from './sidebar/EstatesSvg';
import OverviewSvg from './sidebar/overviewSvg';
import RolesAndPermSvg from './sidebar/RolesAndPermSvg';
import SecurityCompSvg from './sidebar/SecurityCompSvg';
import SettingsSvg from './sidebar/SettingsSvg';
import WalletSvg from './sidebar/WalletSvg';

function IconsBox() {
  return (
      <ul className='iconsBox'>
          <li className='iconsBox__list'>
              <Link to='/dashboard'>
                  <OverviewSvg />
                  <span>Overview</span>
              </Link>
          </li>
          <li className='iconsBox__list'>
              <Link to='/dashboard/admins'>
                  {' '}
                  <AdminsSvg />
                  <span>Admins</span>
              </Link>
          </li>
          <li className='iconsBox__list'>
              <Link to='/dashboard/estates' className='fillIcon'>
                  <EstatesSvg />
                  <span>Estates</span>
              </Link>
          </li>
          <li className='iconsBox__list'>
              <Link to='/dashboard/estateManagers' className='fillIcon'>
                  {' '}
                  <EstateManagerSvg />
                  <span>Estate Manager</span>
              </Link>
          </li>
          <li className='iconsBox__list'>
              <Link to='/dashboard/rolesAndPerm'>
                  <RolesAndPermSvg />
                  <span>Roles & Permissions</span>
              </Link>
          </li>
          <li className='iconsBox__list'>
              <Link to='/dashboard/additional-resident'>
                  {' '}
                  <AdditionalResidentSvg />
                  <span>Additional Resident</span>{' '}
              </Link>
          </li>
          <li className='iconsBox__list'>
              <Link to='/dashboard/security-company' className='fillIcon'>
                  {' '}
                  <SecurityCompSvg />
                  <span>Security Company</span>
              </Link>
          </li>
          <li className='iconsBox__list'>
              <Link to='/dashboard/wallet' className='fillIcon'>
                  <WalletSvg />
                  <span>Wallet</span>
              </Link>
          </li>
          <li className='iconsBox__list'>
              <Link to='/dashboard/artisan' className='fillIcon'>
                  {' '}
                  <ArtisanSvg />
                  <span>Artisan</span>
              </Link>
          </li>
          <li className='iconsBox__list'>
              <Link to='/dashboard/advert'>
                  <AdvertSvg />
                  <span>Advert</span>
              </Link>
          </li>
          <li className='iconsBox__list'>
              <Link to='/dashboard/settings' className='fillIcon'>
                  <SettingsSvg />
                  <span>Settings</span>
              </Link>
          </li>
      </ul>
  )
}

export default IconsBox;
