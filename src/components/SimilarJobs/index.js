import {MdLocationOn} from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'
import './index.css'

const SimilarJobs = props => {
  const {SimilarJobData} = props

  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    rating,
    title,
  } = SimilarJobData

  console.log(SimilarJobData)

  return (
    <li>
      <div>
        <img src={companyLogoUrl} alt="similar job company logo" />
        <div>
          <h1>{title}</h1>
          <div>
            <AiFillStar />
            <p>{rating}</p>
          </div>
        </div>
      </div>
      <div>
        <h1>Description</h1>
        <p>{jobDescription}</p>
      </div>
      <div>
        <div>
          <MdLocationOn />
          <p>{location}</p>
        </div>
        <div>
          <p>{employmentType}</p>
        </div>
      </div>
    </li>
  )
}

export default SimilarJobs
