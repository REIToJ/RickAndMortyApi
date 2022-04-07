import React from 'react'
import styles from "./Filters.module.scss";

const Filters = ({ setSpeciesFilter, setGenderFilter, setStatusFilter, setPageNumber, setLocationFilter, setTypeFilter }) => {
  return (
    <div className={styles.item}>
    <div className="accordion mb-4 " id="accordionExample">
      <div className="accordion-item ">
      
        <h2  className="accordion-header  " id="headingOne">
          <button  className="accordion-button  bg-dark text-white  " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Filters
          </button>
        </h2>
        
        
        <div id="collapseOne" className="accordion-collapse collapse  bg-secondary " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="row d-flex">
            <div style={{ width: '25%' }} className="column-1">
              <div className="accordion-body">

                <span className="fw-bold">Gender</span>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    onChange={e => {
                      setPageNumber(1);
                      setGenderFilter("");
                    }} />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    All
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    onChange={e => {
                      setPageNumber(1);
                      setGenderFilter("Male");
                    }} />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault3"
                    onChange={e => {
                      setPageNumber(1);
                      setGenderFilter("Female");
                    }} />
                  <label className="form-check-label" htmlFor="flexRadioDefault3">
                    Female
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault4"
                    onChange={e => {
                      setPageNumber(1);
                      setGenderFilter("Genderless");
                    }} />
                  <label className="form-check-label" htmlFor="flexRadioDefault3">
                    Genderless
                  </label>
                </div>
              </div>

            </div>
            <div style={{ width: '25%' }} className="column-1">
              <div className="accordion-body">

              <span className="fw-bold">Species</span>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault2"
                    id="flexRadioDefault1"
                    onChange={e => {
                      setPageNumber(1);
                      setSpeciesFilter("");
                    }} />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    All
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault2"
                    id="flexRadioDefault2"
                    onChange={e => {
                      setPageNumber(1);
                      setSpeciesFilter("Human");
                    }} />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Human
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault2"
                    id="flexRadioDefault3"
                    onChange={e => {
                      setPageNumber(1);
                      setSpeciesFilter("Alien");
                    }} />
                  <label className="form-check-label" htmlFor="flexRadioDefault3">
                    Alien
                  </label>
                </div>
                <input className={styles.inputone}
                    onChange={e => {
                      setPageNumber(1);
                      setTypeFilter(e.target.value)
                    }}
                    placeholder='Search species'
                    type="text"
                    />
              </div>

            </div>
            <div style={{ width: '25%' }} className="column-1">
              <div className="accordion-body">

              <span className="fw-bold">Status</span>
                <div className="form-check">
                  <input 
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault3"
                    id="flexRadioDefault1"
                    onChange={e => {
                      setPageNumber(1);
                      setStatusFilter("");
                    }} />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    All
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault3"
                    id="flexRadioDefault2"
                    onChange={e => {
                      setPageNumber(1);
                      setStatusFilter("Alive");
                    }} />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Alive
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault3"
                    id="flexRadioDefault3"
                    onChange={e => {
                      setPageNumber(1);
                      setStatusFilter("Dead");
                    }} />
                  <label className="form-check-label" htmlFor="flexRadioDefault3">
                    Dead
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault3"
                    id="flexRadioDefault3"
                    onChange={e => {
                      setPageNumber(1);
                      setStatusFilter("Unknown");
                    }} />
                  <label className="form-check-label" htmlFor="flexRadioDefault3">
                    Unknown
                  </label>
                </div>
              </div>
             
            </div>
            <div style={{ width: '25%' }} className="column-1 ">
              <div className="accordion-body ">
                    
                  <div className="fw-bold">Type</div>
                     <input className={styles.inputtwo}
                    onChange={e => {
                      setPageNumber(1);
                      setTypeFilter(e.target.value)
                    }}
                    placeholder='Search type'
                    type="text"
                    />
                  
              
                </div>
                <div style={{ width: '50%' }} className="row m-4">
                <button onClick={ e=>{
                  setSpeciesFilter('') 
                  setGenderFilter('')
                  setStatusFilter('') 
                  setPageNumber(1) 
                  setTypeFilter('')
                }} type="button " className="btn btn-dark column-1">Flush</button>
                </div>
              </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Filters