import React from 'react';
import './accommodation.css';

export default function Accomodation() {
  return (
    <div className="AccContainer">
      <p className="AccMainHeading">ACCOMMODATION {'   '}
      <a href="https://forms.gle/55BqqD2wNQwy5Xq56" id="registerbtn" class="aquafade">Register</a></p>
    <center>
      <div className="AccObjectContainer">
        <p>Accommodation can be provided for participants from outside Chennai for two days -
                      May 5th (evening) to 7th (evening) - in CEG Hostels inside the campus.</p>
        </div>
        <div className="AccObjectContainer">
        <p className='Feecontainer'>Accommodation Fee: Rs.250/- (per day in ordinary hostel room). Rs.500/- (per day in International hostel room)</p>
      </div>
      <div className='AccObjectContainer'>
        <p className='Contact'>Contact:  <br/>
          Praveen R - 9361352512<br/>
        Balasubramaniam M - 6385490321
        </p>
      </div>
      <div className='AccObjectContainer'>
      <ul style={{ listStyle: 'decimal' }}>
                            <li>Accommodation will be provided only for out-station (outside Chennai) participants.</li>
                            <li>Registration for accommodation is not part of the Events registration, and is to be done separately.</li>
                            <li>Hospitality services will be available from 06:00 PM on 5th May to 06:00 PM on 7th May, 2022.</li>
                            <li>Accommodation will be provided on a sharing basis. Any requests for individual rooms will not be entertained.
                              However, we will try to accommodate students from the same college together in rooms and dorms (if possible).</li>
                            <li>There are various categories of rooms and dormitories.</li>
                            <li>Allotment of rooms and dorms are at the discretion of the hospitality team.</li>
                            <li>Boys and girls will be accommodated in CEG Hostels separately inside the college campus.</li>
                            <li>Services will be offered on "First Register First Serve" basis.</li>
                            <li>
                              Accommodated students can have their food at their own expense in canteens and food stalls that are available.
                              Food will not be provided by the ITRIX team.</li>
                            <li>
                              Mattresses and buckets will be provided.
                              However, participants are encouraged to carry their own blankets if needed.</li>
                            <li>
                              Random checks will be made to avoid any illegal stay in the campus.
                              Any participant failing to produce his/her accommodation receipt will be fined and immediately expelled from the campus.
                            </li>
                            <li>
                              Participants are responsible for their belongings during their stay.
                              Neither the ITRIX team nor the Institute will take responsibility for any loss of property incurred.</li>
                            <li>
                              Hospitality team has the right to cancel or wait-list accommodation while processing your request.</li>
                            <li>
                              Smoking and drinking is strictly prohibited inside the campus.</li>
                            <li>
                              Any act of misbehaviour inside the campus will be severely dealt with, leading to the immediate
                              expulsion from the campus and cancellation of registration.</li>
                            <li>
                              Any damage caused by the participants to the Institute property during their stay will result in
                              forfeiture of the caution deposit and/or recovery of the amount due to the damage (whichever is higher).</li>
                            <li>
                              Hostel in-time (curfew) is 8.30 PM.</li>
                          </ul>
      </div>
      </center>
    </div>
  );
}
