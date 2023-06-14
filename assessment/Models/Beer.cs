using Newtonsoft.Json.Linq;

namespace assessment.Models
{
    /// <summary>
    /// Contains the model for Beer
    /// </summary>
    public class Beer
    {
        /// <summary>
        /// Id
        /// </summary>
        public int Id { get; set; }
        /// <summary>
        /// Name
        /// </summary>
        public string? Name { get; set; }
        /// <summary>
        /// Tagline
        /// </summary>
        public string? Tagline { get; set; }
        /// <summary>
        /// First_brewed
        /// </summary>
        public string? First_brewed { get; set; }
        /// <summary>
        /// Description
        /// </summary>
        public string? Description { get; set; }
        /// <summary>
        /// Image_url
        /// </summary>
        public string? Image_url { get; set; }
        /// <summary>
        /// Abv
        /// </summary>
        public string? Abv { get; set; }
        /// <summary>
        /// Ibu
        /// </summary>
        public string? Ibu { get; set; }
        /// <summary>
        /// Target_fg
        /// </summary>
        public string? Target_fg { get; set; }
        /// <summary>
        /// Target_fg
        /// </summary>
        public string? Target_og { get; set; }
        /// <summary>
        /// Ebc
        /// </summary>
        public string? Ebc { get; set; }
        /// <summary>
        /// Srm
        /// </summary>
        public string? Srm { get; set; }
        /// <summary>
        /// Ph
        /// </summary>
        public string? Ph { get; set; }
        /// <summary>
        /// Volume
        /// </summary>
        public JObject? Volume { get; set; }
        /// <summary>
        /// Boil_volume
        /// </summary>
        public List<string>? Boil_volume { get; set; }
        /// <summary>
        /// Method
        /// </summary>
        public List<string>? Method { get; set; }
        /// <summary>
        /// Ingredients
        /// </summary>
        public List<string>? Ingredients { get; set; }
        /// <summary>
        /// Food_pairing
        /// </summary>
        public string[]? Food_pairing { get; set; }
        /// <summary>
        /// Brewers_tips
        /// </summary>
        public string? Brewers_tips { get; set; }
        /// <summary>
        /// Attenuation_level
        /// </summary>
        public string? Attenuation_level { get; set; }
        /// <summary>
        /// Contributed_by
        /// </summary>
        public string? Contributed_by { get; set; }
    }
}
