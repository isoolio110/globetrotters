module LocationsHelper

  def format_date(date)
    # date.strftime("%Y, %b., %e")
    date.strftime("%b. %e, %Y")
  end

end
