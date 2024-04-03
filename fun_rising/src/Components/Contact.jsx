import React from 'react'

export default function Contact() {
  return (
    <section>
        <div className='container mt-5'>
        <div class="row mt-5">
        <div class="col-md-3 phone">
            <div class="icon text-center">&#128222;</div>
            <div className='text-center'>Phone: 123-456-7890</div>
        </div>
        <div class="col-md-3 mail">
            <div class="icon text-center">&#9993;</div>
            <div className='text-center'>Email: example@example.com</div>
        </div>
        <div class="col-md-3 location">
            <div class="icon text-center">&#127968;</div>
            <div className='text-center'>Location: City, Country</div>
        </div>
    </div>
        </div>
    </section>
  )
}
