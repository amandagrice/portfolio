export function ToggleDetails({showDetails, setShowDetails}) {
    return (
        <div>
            {!showDetails && <div className="showDetails" onClick={() => setShowDetails(true)}>Show More Details</div>}
            {showDetails && <div className="showDetails" onClick={() => setShowDetails(false)}>Show Less</div>}
        </div>
    )
}